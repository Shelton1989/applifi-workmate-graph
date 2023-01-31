import { BookingOrderCreateManyExperienceInputEnvelope } from "../inputs/BookingOrderCreateManyExperienceInputEnvelope";
import { BookingOrderCreateOrConnectWithoutExperienceInput } from "../inputs/BookingOrderCreateOrConnectWithoutExperienceInput";
import { BookingOrderCreateWithoutExperienceInput } from "../inputs/BookingOrderCreateWithoutExperienceInput";
import { BookingOrderScalarWhereInput } from "../inputs/BookingOrderScalarWhereInput";
import { BookingOrderUpdateManyWithWhereWithoutExperienceInput } from "../inputs/BookingOrderUpdateManyWithWhereWithoutExperienceInput";
import { BookingOrderUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/BookingOrderUpdateWithWhereUniqueWithoutExperienceInput";
import { BookingOrderUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/BookingOrderUpsertWithWhereUniqueWithoutExperienceInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderUpdateManyWithoutExperienceInput {
    create?: BookingOrderCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: BookingOrderUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: BookingOrderCreateManyExperienceInputEnvelope | undefined;
    set?: BookingOrderWhereUniqueInput[] | undefined;
    disconnect?: BookingOrderWhereUniqueInput[] | undefined;
    delete?: BookingOrderWhereUniqueInput[] | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
    update?: BookingOrderUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: BookingOrderUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: BookingOrderScalarWhereInput[] | undefined;
}
