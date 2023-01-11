"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyExperienceInputEnvelope_1 = require("../inputs/PriceCreateManyExperienceInputEnvelope");
const PriceCreateOrConnectWithoutExperienceInput_1 = require("../inputs/PriceCreateOrConnectWithoutExperienceInput");
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/PriceUpdateManyWithWhereWithoutExperienceInput");
const PriceUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/PriceUpdateWithWhereUniqueWithoutExperienceInput");
const PriceUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/PriceUpsertWithWhereUniqueWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateManyWithoutExperienceInput = class PriceUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpsertWithWhereUniqueWithoutExperienceInput_1.PriceUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateManyExperienceInputEnvelope_1.PriceCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateManyExperienceInputEnvelope_1.PriceCreateManyExperienceInputEnvelope)
], PriceUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpdateWithWhereUniqueWithoutExperienceInput_1.PriceUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpdateManyWithWhereWithoutExperienceInput_1.PriceUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1.PriceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
PriceUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpdateManyWithoutExperienceInput);
exports.PriceUpdateManyWithoutExperienceInput = PriceUpdateManyWithoutExperienceInput;
