import {RequestHandler, Request, Response} from "express";
import prepareResponse from "./prepareResponse";
import prepareRequest from "./prepareRequest";
import * as Lru from 'lru-cache';
import SeaBattle from "../skill/SeaBattle";

const cache = new Lru<string, SeaBattle>(50);

const handleRequest: RequestHandler = async (req: Request, res: Response) => {
    const {request, session, version} = req.body;
    const requestText = request.original_utterance;
    console.log(requestText);

    const params = prepareRequest({text: requestText});

    let seaBattle = cache.get(session);

    if (!seaBattle) {
        cache.set(session, new SeaBattle());
        seaBattle = cache.get(session);
    }

    const skillResponse = seaBattle.getResponseFor(params);

    const response = prepareResponse({
        version,
        session,
        message: skillResponse.text,
    });

   res
       .json(response);
};

export default handleRequest;
