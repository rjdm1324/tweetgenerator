## Tweet Generator (ver president)
----
당신의 Tweet의 나머지 부분을 대통령처럼 작성해드립니다.

## How to use
----
<img width="947" alt="before_input" src="https://user-images.githubusercontent.com/76748314/124707791-4858ba80-df34-11eb-9604-7dc074b3aed3.png">
* TextBox에 글을 입력 후 트위터 이미지 클릭을 통해 그 뒤에 이어질 문장을 도움 받을 수 있습니다.
<img width="944" alt="after_input" src="https://user-images.githubusercontent.com/76748314/124707848-5eff1180-df34-11eb-8cfb-af03db070746.png">

## How to make
----
1. [kaggle](https://www.kaggle.com/)을 통해 data set을 준비했습니다.

2. data set을 전처리 하여 .txt 파일로 만들었습니다.

3. 받아온 data set을 [Teachable nlp](https://ainize.ai/teachable-nlp)로 gpt2-small에 training 시켜 fine-tunning을 하였습니다. 

## Data Set
----
- [Barack Obama Tweets](https://www.kaggle.com/datacrux/barack-obama-twitterdata-from-20122019)
- [Shinzo Abe Tweets](https://www.kaggle.com/team-ai/shinzo-abe-japanese-prime-minister-twitter-nlp)
- [Joe Biden Tweets](https://www.kaggle.com/rohanrao/joe-biden-tweets)
- [Donald Trump Tweets](https://www.kaggle.com/kingburrito666/better-donald-trump-tweets)

## Healthy Check
----
Using curl in the terminal:

$ curl --request GET 'https://train-dz1w9314dfq7ak9g7ca6-gpt2-train-teachable-ainize.endpoint.ainize.ai/ping'
{
  "status": "Healthy"
}

