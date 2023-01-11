"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutExperienceInput = class PriceCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput)
], PriceCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutExperienceInput);
exports.PriceCreateOrConnectWithoutExperienceInput = PriceCreateOrConnectWithoutExperienceInput;
