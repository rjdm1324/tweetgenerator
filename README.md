# Tweets Generator (Ver. President)
---
[![Run on Ainize](https://ainize.ai/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=https://github.com/rjdm1324/tweetgenerator)
## Overview
---
* A service to fill out a blank part of your tweet. 
* You can be Obama, Trump, Biden and Abe.
* You can see three options.
* using teachable nlp, gpt2-large

## How to make
----
1. Find twitter data sets in kaggle.
2. It converts the Twitter data set that it finds into a txt file.
3. Go to teachable nlp, upload text file, set model type and epoch, and click train model button.
4. Process the generated api and  create a service.

## Usage
---
### how to run a Demo

<img width="947" alt="before_input" src="https://user-images.githubusercontent.com/76748314/124707791-4858ba80-df34-11eb-9604-7dc074b3aed3.png">
* After typing a tweet in TextBox, you can check the following tweets through Twitter image clicks.
<img width="944" alt="after_input" src="https://user-images.githubusercontent.com/76748314/124707848-5eff1180-df34-11eb-8cfb-af03db070746.png">


Demo : [Ainize](https://ainize.ai/rjdm1324/tweetgenerator?branch=main)


## With CLI
---

### API Prediction Test


### Pre-processing for API

To use the API, the sentence must be converted into a vector form.

[Web](https://master-gpt2-text2vec-shyun-comcom.endpoint.ainize.ai/) or using curl in the terminal:

```
$ curl --request POST 'https://main-gpt-2-server-gkswjdzz.endpoint.ainize.ai/preprocess' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"context": "there is a boy"
	}'

"[8117, 318, 257, 2933]"
```

### Prediction

Using curl in the terminal:

```
$ curl --request POST 'https://train-9f7heqpc7bvul9o5pndu-gpt2-train-teachable-ainize.endpoint.ainize.ai/predictions/gpt-2-en-large-finetune' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "text": [3666, 1438, 318, 14200, 11, 314, 16486, 1850, 287, 13851, 3783],
    "num_samples": 5,
    "length": 8
  }'

[
  [
    3666, 1438, 318, 14200, 11, 314, 16486, 1850, 287, 13851, 3783, 11, 314, 1101, 422, 262, 1294, 11, 523
  ],
  ...,
  [
    3666, 1438, 318, 14200, 11, 314, 16486, 1850, 287, 13851, 3783, 379, 262, 2059, 286, 520, 26414, 11, 543
  ]
]
```

### Healthy Check
---
Using curl on the terminal:

```
$ curl --request GET 'https://train-9f7heqpc7bvul9o5pndu-gpt2-train-teachable-ainize.endpoint.ainize.ai/ping'
{
  "status": "Healthy"
}

```

## Acknowledgements
---
* [Teachable nlp](https://ainize.ai/teachable-nlp)
* Data set - [kaggle](https://www.kaggle.com/)
  - [Barack Obama Tweets](https://www.kaggle.com/datacrux/barack-obama-twitterdata-from-20122019)
  - [Shinzo Abe Tweets](https://www.kaggle.com/team-ai/shinzo-abe-japanese-prime-minister-twitter-nlp)
  - [Joe Biden Tweets](https://www.kaggle.com/rohanrao/joe-biden-tweets)
  - [Donald Trump Tweets](https://www.kaggle.com/kingburrito666/better-donald-trump-tweets)
* [API Reference](https://ainize.ai/gkswjdzz/gpt-2-server?branch=main)

