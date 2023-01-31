import { ExperienceCreateOrConnectWithoutBookingsInput } from "../inputs/ExperienceCreateOrConnectWithoutBookingsInput";
import { ExperienceCreateWithoutBookingsInput } from "../inputs/ExperienceCreateWithoutBookingsInput";
import { ExperienceUpdateWithoutBookingsInput } from "../inputs/ExperienceUpdateWithoutBookingsInput";
import { ExperienceUpsertWithoutBookingsInput } from "../inputs/ExperienceUpsertWithoutBookingsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneRequiredWithoutBookingsInput {
    create?: ExperienceCreateWithoutBookingsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutBookingsInput | undefined;
    upsert?: ExperienceUpsertWithoutBookingsInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutBookingsInput | undefined;
}
