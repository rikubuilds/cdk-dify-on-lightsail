import { ResourceName } from './resource-name';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lightsail from 'aws-cdk-lib/aws-lightsail';

interface ExtendedStackProps extends cdk.StackProps {
  resourceName: ResourceName;
}

export class DifyOnLightsailStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ExtendedStackProps) {
    super(scope, id, props);

    // Define Dify install script
    const userData = `#!/bin/bash
curl -fsSL https://get.docker.com -o install-docker.sh
sh install-docker.sh
git clone https://github.com/langgenius/dify.git
cd dify/docker
docker compose up -d`;

    // Create Lightsail instance
    const instance = new lightsail.CfnInstance(this, 'Instance', {
      instanceName: props.resourceName.instance_name(),
      blueprintId: 'ubuntu_22_04',
      bundleId: 'small_3_0',
      userData: userData,
    });

    // Set static IP address
    const cfnStaticIp = new lightsail.CfnStaticIp(this, 'StaticIp', {
      staticIpName: props.resourceName.static_ip_name(),
      attachedTo: instance.instanceName,
    });
  }
}
