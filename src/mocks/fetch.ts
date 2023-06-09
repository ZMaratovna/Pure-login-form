export const mockedFetch = (isSuccess?: boolean): Promise<Response> => {
  if (isSuccess) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            new Response(JSON.stringify({ token: "Token" }), {
              status: 200,
              statusText: "Success!",
            }),
          ),
        5000,
      ),
    );
  } else {
    return new Promise((_resolve, reject) => reject());
  }
};
