async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(knownEmotions.has(emotion));
        },1000)
    })
}

async function speak(knownEmotions, newEmotion, phrase) {
    return new Promise((resolve,reject)=>{
        checkEmotion(knownEmotions,newEmotion)
        .then(result){
            if(hasEmotion){
                resolve((`"${phrase}" (${newEmotion})`))
            }else {
                reject(new Error(`Does not compute. I do not understand ${newEmotion}.`))
            }
        }
    })
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
