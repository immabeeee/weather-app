import { InjectionToken } from "@angular/core";
import { Card } from "../../data-access/model/card.interface";

export const CARD_TOKEN = new InjectionToken<Card>('CARD_TOKEN');