"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityUpdateManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateManyMealInputEnvelope_1 = require("../inputs/MealAvailabilityCreateManyMealInputEnvelope");
const MealAvailabilityCreateOrConnectWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateOrConnectWithoutMealInput");
const MealAvailabilityCreateWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateWithoutMealInput");
const MealAvailabilityScalarWhereInput_1 = require("../inputs/MealAvailabilityScalarWhereInput");
const MealAvailabilityUpdateManyWithWhereWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateManyWithWhereWithoutMealInput");
const MealAvailabilityUpdateWithWhereUniqueWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateWithWhereUniqueWithoutMealInput");
const MealAvailabilityUpsertWithWhereUniqueWithoutMealInput_1 = require("../inputs/MealAvailabilityUpsertWithWhereUniqueWithoutMealInput");
const MealAvailabilityWhereUniqueInput_1 = require("../inputs/MealAvailabilityWhereUniqueInput");
let MealAvailabilityUpdateManyWithoutMealInput = class MealAvailabilityUpdateManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateOrConnectWithoutMealInput_1.MealAvailabilityCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityUpsertWithWhereUniqueWithoutMealInput_1.MealAvailabilityUpsertWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateManyMealInputEnvelope_1.MealAvailabilityCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateManyMealInputEnvelope_1.MealAvailabilityCreateManyMealInputEnvelope)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityUpdateWithWhereUniqueWithoutMealInput_1.MealAvailabilityUpdateWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityUpdateManyWithWhereWithoutMealInput_1.MealAvailabilityUpdateManyWithWhereWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityScalarWhereInput_1.MealAvailabilityScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityUpdateManyWithoutMealInput.prototype, "deleteMany", void 0);
MealAvailabilityUpdateManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityUpdateManyWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityUpdateManyWithoutMealInput);
exports.MealAvailabilityUpdateManyWithoutMealInput = MealAvailabilityUpdateManyWithoutMealInput;
