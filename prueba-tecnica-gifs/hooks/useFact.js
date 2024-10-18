import axios from "axios";
import { useState } from "react";
require('dotenv'.config())

//TO-DO: Import dot env to make the get request

const getThreeWords = () => {

}

const getArrayIntoFinal = () => {

}


export const useFact = () => {

    const [fact, setFact] = useState('im this fact');
    const [factArray, setFactArray] = useState([
        { key: crypto.randomUUID(), text: "hey" },
        { key: crypto.randomUUID(), text: "there" },
        { key: crypto.randomUUID(), text: "how" }])

    const getFact = async () => {
        //Make request to db
        let myResponse = ''
        try {
            await axios.get(process.env.CAT_FACT_URL).
            then((response) => {
                myResponse = response
                console.log(myResponse)
            })
        } catch {

        }

    }

    return {
        fact,
        factArray,
        getFact
    }

}
