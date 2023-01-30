"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutExperienceInput_1 = require("../inputs/PriceCreateOrConnectWithoutExperienceInput");
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceUpdateWithoutExperienceInput_1 = require("../inputs/PriceUpdateWithoutExperienceInput");
const PriceUpsertWithoutExperienceInput_1 = require("../inputs/PriceUpsertWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneWithoutExperienceInput = class PriceUpdateOneWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput)
], PriceUpdateOneWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput)
], PriceUpdateOneWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutExperienceInput_1.PriceUpsertWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutExperienceInput_1.PriceUpsertWithoutExperienceInput)
], PriceUpdateOneWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceUpdateOneWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceUpdateOneWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput)
], PriceUpdateOneWithoutExperienceInput.prototype, "update", void 0);
PriceUpdateOneWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpdateOneWithoutExperienceInput);
exports.PriceUpdateOneWithoutExperienceInput = PriceUpdateOneWithoutExperienceInput;
