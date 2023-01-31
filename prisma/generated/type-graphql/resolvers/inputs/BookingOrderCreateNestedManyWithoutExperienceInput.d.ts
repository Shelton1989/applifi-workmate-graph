import { BookingOrderCreateManyExperienceInputEnvelope } from "../inputs/BookingOrderCreateManyExperienceInputEnvelope";
import { BookingOrderCreateOrConnectWithoutExperienceInput } from "../inputs/BookingOrderCreateOrConnectWithoutExperienceInput";
import { BookingOrderCreateWithoutExperienceInput } from "../inputs/BookingOrderCreateWithoutExperienceInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderCreateNestedManyWithoutExperienceInput {
    create?: BookingOrderCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: BookingOrderCreateManyExperienceInputEnvelope | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
}
