const queryGeminiProVisionAPI = require('./core/gemini-core');
const saveStringToFile = require('./core/string-to-file');
const prompts = require('./prompts/porsche-prompts');
const {v4: uuidv4} = require("uuid");

class Runner {
    static async execute() {

        var image = "images/2023_porsche_taycan.jpeg";

        async function getShowroomDetails(givenImage) {
            const response = await queryGeminiProVisionAPI(givenImage, prompts.provideMeTheDetailsOfTheShowroomUsingGoogleMaps);
            await saveStringToFile(response); // save to file
            console.log("provideMeTheDetailsOfTheShowroomUsingGoogleMaps completed");
            return response;
        }

        let message = await getShowroomDetails(image);
        console.log("---");
        console.log(message);
        console.log("---");
    }
}

Runner.execute();
