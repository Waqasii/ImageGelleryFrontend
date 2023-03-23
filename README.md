# React Image Gallery App (Frontend)

## Introduction

This is a React app that uses TypeScript and interacts with an S3 bucket to upload and delete images. The app also interacts with a PostgreSQL database to retrieve image URLs using a GraphQL API. The images uploaded to S3 are resized to thumbnails using a Lambda function, and the resized image is saved into S3 bucket  with a different name appended with "-resize". 

## Installation

To install the dependencies, run the following command in your terminal:

`npm install`


## Running the App

To run the app, navigate to the project directory in your terminal and run the following command:

`npm start`

This will start the app at `http://localhost:3000/`.

## Usage

The app allows you to upload and delete images from the S3 bucket. To upload an image, click the "+" button and select an image file. Once selected, You will see the upload button next to selected file name, image will be uploaded to the S3 bucket and added to the database. 

To delete an image, First click on image to preview it in full screen and then click the "Delete" button next to the image. This will delete the image from the S3 bucket and remove the image record from the database.

## Lambda Function

The Lambda function is used to resize the uploaded images to thumbnails. The function saves the resized image with a "-resize" suffix in the same S3 bucket. 

