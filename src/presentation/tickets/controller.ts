import { Request, Response } from "express";

export class TicketController {
  // DI - wssService
  constructor() {}

  public getTickets = async (req: Request, res: Response) => {
    res.json("getTickets");
  };

  public getLastTicketNumber = async (req: Request, res: Response) => {
    res.json("getLastTicketNumber");
  };

  public pendingTickets = async (req: Request, res: Response) => {
    res.json("pendingTickets");
  };

  public drawTicket = async (req: Request, res: Response) => {
    res.json("drawTicket");
  };

  public createTicket = async (req: Request, res: Response) => {
    res.json("createTicket");
  };

  public ticketFinished = async (req: Request, res: Response) => {
    res.json("ticketFinished");
  };
  
  public workingOn = async (req: Request, res: Response) => {
    res.json("workingOn");
  };
}
