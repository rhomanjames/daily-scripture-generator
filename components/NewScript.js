import React from 'react'
import {TwitterIcon, FacebookIcon, EmailIcon, LinkedinIcon} from "react-share"
import {EmailShareButton, TwitterShareButton, FacebookShareButton, LinkedinShareButton} from "react-share"

function NewScript() {

        let scripts = [["For this is the whole duty of man, that we fear Yah and keep his commandments and his commandments are not grievous.",  
                        "Ecclesiastes 12:13",
                        "Read Exodus 20 and find at least two commandments you can do better with",
                        ]  ,
                        ["Sin is the transgression of the law",  
                        "1 John 3:4",
                        "Read a chapter from the book of Deuteronomy and try to find a law you are not currently aware of.",
                        ],
                        ["For this is the love of Yah, that we keep his commandments",  
                        "1 John 5:3",
                        "How can we show Yah that we love him more today?",
                        ],
                        ["We shall not live by bread alone, but by every word that proceeds from Yah",  
                        "Luke 4:4",
                        "Go back into the Torah (Genesis-Deuteronomy) and find some of Yah's words that you may not be familiar with.",
                        ]]

                        let num = Math.floor(Math.random() * scripts.length)
    return (
        <div>
             {/*Scripture Verse*/}
            <div className="w-full flex mb-4 rounded-lg p-2 flex-col border-gray-50 text-center">
                <h1 id="text" className="text-2xl font-bold mb-2"> {scripts[num][0]}</h1> 
                <h4 id="location" className="text-sm">{scripts[num][1]}</h4>
            </div>
            {/*Share*/}
            <div className="space-x-4 mt-4 flex w-full justify-center items-center">
                <FacebookShareButton
                url="https://github.com/rhomanjames"
                quote={scripts[num][0] + " (" + scripts[num][1] + ")" + " | " + scripts[num][2]}
                title="My Daily Scriptures"
                className="Demo__some-network__share-button">
                    <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
                <TwitterShareButton
                url="www.servingYah.com"
                className="Demo__some-network__share-button">
                    <TwitterIcon
                    size={32}
                    round />
                </TwitterShareButton>
            </div>
            {/*Action*/}
            <div className="w-full justify-center text-sm rounded-lg bg-blue-50 mt-4 shadow-inner hover:border-blue-300 transition border-2 border-transparent flex p-2 flex-col text-center">
                <h4 className="w-full justify-center italic px-8" id="action">{scripts[num][2]}</h4>
            </div>
        </div>
    )
}


export default NewScript
