import gulp from "gulp";
import shell from "gulp-shell";

// Default task: Build and serve the project with Parcel
gulp.task(
  "default",
  shell.task("parcel index.html --open")
);

// Test task: Run Mocha unit tests
gulp.task(
  "test",
  shell.task("mocha")
);

// Cypress task: Run Cypress E2E tests
gulp.task(
  "cypress",
  shell.task("npx cypress run")
);
