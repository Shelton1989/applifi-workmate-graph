"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateManyWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateManyMealItemInputEnvelope_1 = require("../inputs/MealItemOptionCreateManyMealItemInputEnvelope");
const MealItemOptionCreateOrConnectWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateOrConnectWithoutMealItemInput");
const MealItemOptionCreateWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateWithoutMealItemInput");
const MealItemOptionScalarWhereInput_1 = require("../inputs/MealItemOptionScalarWhereInput");
const MealItemOptionUpdateManyWithWhereWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateManyWithWhereWithoutMealItemInput");
const MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput");
const MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionUpdateManyWithoutMealItemInput = class MealItemOptionUpdateManyWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateOrConnectWithoutMealItemInput_1.MealItemOptionCreateOrConnectWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput_1.MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateManyMealItemInputEnvelope_1.MealItemOptionCreateManyMealItemInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateManyMealItemInputEnvelope_1.MealItemOptionCreateManyMealItemInputEnvelope)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput_1.MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionUpdateManyWithWhereWithoutMealItemInput_1.MealItemOptionUpdateManyWithWhereWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionScalarWhereInput_1.MealItemOptionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionUpdateManyWithoutMealItemInput.prototype, "deleteMany", void 0);
MealItemOptionUpdateManyWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateManyWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionUpdateManyWithoutMealItemInput);
exports.MealItemOptionUpdateManyWithoutMealItemInput = MealItemOptionUpdateManyWithoutMealItemInput;
