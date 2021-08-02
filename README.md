## To setup

1. Open this
1. Click on "fork"
1. Invite your pair to your fork

## The problem

We're going to create a news application for space news. There is an open api at https://api.spaceflightnewsapi.net/v3/documentation

This api returns 2 different data sets - articles and blogs

We want to create a new api that combines both articles and blogs in a single api endpoint array reponse.

The response should be an array of spaceposts.

spacepost

```
{
  title:string,
  link: string,
  publishDate:Date
}
```

The response should only return the latest (newest) 10 spaceposts.

So you will combine the two responses from space flight news and return the latest 10.

If you've never used nest before the entry point for this task would be the `getHello()` method is app.service.ts. This is called by the controller.

## Some notes

The axios http library is installed but feel free to add another if you prefer it or know it better. Don't over think the http library though. We're interested in the solution to the problem.

Use google freely. We all use google to search for solutions and docs all day long.

Ask your pair questions. We all ask eachother questions when we're stuck or just to bounce ideas around.
