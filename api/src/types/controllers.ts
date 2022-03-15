export type ControllerFnWithoutRequestType = (
    _: Request,
    res: Response
) => Promise<void>;
