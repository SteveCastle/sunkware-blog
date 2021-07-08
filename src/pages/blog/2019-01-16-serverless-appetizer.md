---
templateKey: blog-post
title: A Serverless Appetizer
date: 2019-01-16T21:02:20.866Z
description: >-
  A case study of a serverless app built with AWS AppSync and a variety of other
  common serverless patterns.
tags:
  - programming
  - aws
  - serverless
  - projects
---

Serverless is a phrase a lot of people have heard, or learned a little about,
but they may not have had much experience building a real world application
with. Until you have it's hard to know if the tradeoffs, and there are
tradeoffs, vs building a more convetional app are worth it. This is a case study
of an app which uses the majority of the patterns you might use when building a
serverless app. Lambda functions, auth as a service, DynamoDB, and statically
hosted js are all represented, as well as two languages, JavaScript and Go.

## Project Layout

## Serverless Framework

One major problem with writing a serverless application is coordinating the
resources on the cloud we are going to need to run the app. We want to
streamline testing, deployment, and continuous integration. Ideally with one
command we could go from having a checked out git repo, to a running cloud
infrastcture with all of the services we need for the application to funcion.
Serverless framework is designed to help us do all of these things.

## AppSync

The core of our backend is a GraphQl API provided by AWS AppSync.

### Schema

The AppSync schema is the starting point when creating an AppSync service.

### Resolvers

Resolvers are the handlers for a given query or mutation in your GraphQL schema.
AppSync has a couple of different kinds.

### Mapping Templates

Mapping templates are a concept used by AppSync to transform http requests and
responses to and from our AppSync Resolvers. There are two kinds Request Mapping
Templates and Response Mapping Templates. Request mapping templates take http
requests to the AppSync service and transorm them into a format used by the
resolver. Response mapping templates take the results of tbe resolver and create
a useable http response string.

# Algolia Search

Algolia is a service for creating awesome search and filtering experiences for
users. It's super easy to use and even has a great react component package for
quickly wiring up a front end to display the search ui.

## Cognito Auth

Cognito Auth is the serverless authentication service in AWS. It let's you
create and authenticate users in a variety of ways.

## Glue Lambda Functions

Glue lambda functions are lambda functions that are not part of the request and
response chain in the API, but rather respond to events in your AWS resources,
and perform some action. This app has two. One to keep our Algolia search index
in sync with our content, and another to create image transformations, such as
thumbnails, and previw images, for any files uploaded by the app to our S3
bucket.

### Algolia Sync Function

Now let's look at the lambda function we use to keep our DynamoDB data in sync
with Algolia.

### Lambda S3 Image Transformationz with Go

When users upload photos we want to be able to process them and create different
size and format variations to serve in different use cases. It would also be
nice to create a very lightweight preview version to use while preloading
images.

## FrontEnd

Our frontend is going to be a React application.

### AWS Amplify

AWS Amplify is a npm package created by Amazon for interacting with AWS services
from a javascript application. We are going to use it for a couple of things,
Authentication, file uploads, and interacting with the AppSync API.

### Apollo

We can
