export default function trimWhitespace(projectName) {
  const projectNameTrimmed = projectName.split(" ");
  return projectNameTrimmed.join("");
}
