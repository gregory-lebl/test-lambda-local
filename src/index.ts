import { Handler } from 'aws-lambda';

type Properties = {
  length: number;
  width: number;

}

export const handler: Handler = async (event: Properties) => {
    const response = {
      statusCode: 200,
      event
    }

    return response
};
