async function isAuthRequired(authObject: Yarnrc, projectYarnrc: Yarnrc) {
  const mergedYarnrc = {
    ...projectYarnrc,
    ...(authObject.npmAuthIdent && { npmAuthIdent: authObject.npmAuthIdent }),
  };

  // now we merge the npmAuthIdent inside each of the npmRegistries entries
  
}
