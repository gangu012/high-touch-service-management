@echo off
echo Setting up Git configuration...
git config user.name "gangu012"
git config user.email "gangu012@users.noreply.github.com"

echo Adding files to Git...
git add .

echo Committing files...
git commit -m "Initial commit: High Touch Service Management project"

echo Pushing to GitHub...
git push -u origin master

echo Deployment complete!
echo Your project should be available at: https://gangu012.github.io/high-touch-service-management/
pause

