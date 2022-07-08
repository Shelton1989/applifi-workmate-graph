import { Request } from "../../../models/Request";
import { User } from "../../../models/User";
export declare class RequestRelationsResolver {
    Reporter(request: Request, ctx: any): Promise<User>;
}
