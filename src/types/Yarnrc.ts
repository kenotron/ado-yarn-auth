interface Yarnrc {
  npmRegistryServer?: string;
  npmAuthIdent?: string;
  npmRegistries?: Record<
    string,
    { npmAuthIdent?: string; npmAlwaysAuth?: boolean }
  >;
}
