import {KZ_IMG_PATH, NFACTORIAL_IMG_PATH} from "../images"
import Tweet from "./Tweet"

export default function TweetsList() {
    const tweets = [
        {
            authorName: 'free kz today',
            authorUserName: '@kztoday',
            img: KZ_IMG_PATH,
            content: 'blah-blah tweet blah',
            replyCount: 200,
            retweetCount: 1000,
            likeCount: 500
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы',
            replyCount: 200,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы заебал!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы заебал!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы заебал!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы заебал!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
        {
            authorName: 'NFactorial KZ',
            authorUserName: '@nfactorialKz',
            img: NFACTORIAL_IMG_PATH,
            content: 'купи курсы заебал!!!!!',
            replyCount: 2000,
            retweetCount: 1000,
            likeCount: 5000
        },
    ]

    return tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
}