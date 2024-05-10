export class ResourceName {
  public readonly system_name: string;

  constructor(system_name: string) {
    this.system_name = system_name;
  }

  private generate(suffix: string): string {
    return `${this.system_name}-${suffix}`;
  }

  public stack_name(): string {
    return this.generate(`stack`);
  }

  public instance_name(suffix?: string): string {
    return this.generate(suffix ? `instance-${suffix}` : `instance`);
  }

  public static_ip_name(suffix?: string): string {
    return this.generate(suffix ? `static-ip-${suffix}` : `static-ip`);
  }
}
