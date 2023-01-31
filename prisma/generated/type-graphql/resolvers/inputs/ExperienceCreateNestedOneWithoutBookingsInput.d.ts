import { ExperienceCreateOrConnectWithoutBookingsInput } from "../inputs/ExperienceCreateOrConnectWithoutBookingsInput";
import { ExperienceCreateWithoutBookingsInput } from "../inputs/ExperienceCreateWithoutBookingsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutBookingsInput {
    create?: ExperienceCreateWithoutBookingsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutBookingsInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
