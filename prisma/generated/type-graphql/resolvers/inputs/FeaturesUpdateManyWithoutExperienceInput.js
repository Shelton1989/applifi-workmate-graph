"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyExperienceInputEnvelope_1 = require("../inputs/FeaturesCreateManyExperienceInputEnvelope");
const FeaturesCreateOrConnectWithoutExperienceInput_1 = require("../inputs/FeaturesCreateOrConnectWithoutExperienceInput");
const FeaturesCreateWithoutExperienceInput_1 = require("../inputs/FeaturesCreateWithoutExperienceInput");
const FeaturesScalarWhereInput_1 = require("../inputs/FeaturesScalarWhereInput");
const FeaturesUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/FeaturesUpdateManyWithWhereWithoutExperienceInput");
const FeaturesUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/FeaturesUpdateWithWhereUniqueWithoutExperienceInput");
const FeaturesUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/FeaturesUpsertWithWhereUniqueWithoutExperienceInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpdateManyWithoutExperienceInput = class FeaturesUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateOrConnectWithoutExperienceInput_1.FeaturesCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpsertWithWhereUniqueWithoutExperienceInput_1.FeaturesUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateManyExperienceInputEnvelope_1.FeaturesCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateManyExperienceInputEnvelope_1.FeaturesCreateManyExperienceInputEnvelope)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpdateWithWhereUniqueWithoutExperienceInput_1.FeaturesUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesUpdateManyWithWhereWithoutExperienceInput_1.FeaturesUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesScalarWhereInput_1.FeaturesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
FeaturesUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesUpdateManyWithoutExperienceInput);
exports.FeaturesUpdateManyWithoutExperienceInput = FeaturesUpdateManyWithoutExperienceInput;
