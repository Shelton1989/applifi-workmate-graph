"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyMealInputEnvelope_1 = require("../inputs/FeaturesCreateManyMealInputEnvelope");
const FeaturesCreateOrConnectWithoutMealInput_1 = require("../inputs/FeaturesCreateOrConnectWithoutMealInput");
const FeaturesCreateWithoutMealInput_1 = require("../inputs/FeaturesCreateWithoutMealInput");
const FeaturesScalarWhereInput_1 = require("../inputs/FeaturesScalarWhereInput");
const FeaturesUpdateManyWithWhereWithoutMealInput_1 = require("../inputs/FeaturesUpdateManyWithWhereWithoutMealInput");
const FeaturesUpdateWithWhereUniqueWithoutMealInput_1 = require("../inputs/FeaturesUpdateWithWhereUniqueWithoutMealInput");
const FeaturesUpsertWithWhereUniqueWithoutMealInput_1 = require("../inputs/FeaturesUpsertWithWhereUniqueWithoutMealInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpdateManyWithoutMealInput = class FeaturesUpdateManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateOrConnectWithoutMealInput_1.FeaturesCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpsertWithWhereUniqueWithoutMealInput_1.FeaturesUpsertWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateManyMealInputEnvelope_1.FeaturesCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateManyMealInputEnvelope_1.FeaturesCreateManyMealInputEnvelope)
], FeaturesUpdateManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpdateWithWhereUniqueWithoutMealInput_1.FeaturesUpdateWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpdateManyWithWhereWithoutMealInput_1.FeaturesUpdateManyWithWhereWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesScalarWhereInput_1.FeaturesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutMealInput.prototype, "deleteMany", void 0);
FeaturesUpdateManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateManyWithoutMealInput", {
        isAbstract: true
    })
], FeaturesUpdateManyWithoutMealInput);
exports.FeaturesUpdateManyWithoutMealInput = FeaturesUpdateManyWithoutMealInput;
