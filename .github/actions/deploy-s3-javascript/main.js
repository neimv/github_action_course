
const core = require('@actions/core');
const exec = require('@actions/exec');
// const github = require('@actions/github');

function run() {
    // get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: false });
    const distFolder = core.getInput('dist-folder', { required: true });

    // upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`echo "echo aws ${distFolder} ${bucket} --region ${bucketRegion}"`);

    core.notice('Hello from my custom JavaScript Action!');

    const webSiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazon.com`;
    core.setOutput('website-url', webSiteUrl);
}

run();