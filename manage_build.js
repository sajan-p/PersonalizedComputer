function clickBuild(buildName) {
  buildClicked.forEach(build => {
    if (build.build === buildName) {
      localStorage.setItem("buildClicked", build.build)
      location.href="build-parts.html";
    }
  })
}
