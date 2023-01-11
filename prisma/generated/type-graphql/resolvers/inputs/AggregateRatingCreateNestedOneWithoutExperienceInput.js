"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateNestedOneWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutExperienceInput");
const AggregateRatingCreateWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateWithoutExperienceInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateNestedOneWithoutExperienceInput = class AggregateRatingCreateNestedOneWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput)
], AggregateRatingCreateNestedOneWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutExperienceInput_1.AggregateRatingCreateOrConnectWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutExperienceInput_1.AggregateRatingCreateOrConnectWithoutExperienceInput)
], AggregateRatingCreateNestedOneWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateNestedOneWithoutExperienceInput.prototype, "connect", void 0);
AggregateRatingCreateNestedOneWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateNestedOneWithoutExperienceInput", {
        isAbstract: true
    })
], AggregateRatingCreateNestedOneWithoutExperienceInput);
exports.AggregateRatingCreateNestedOneWithoutExperienceInput = AggregateRatingCreateNestedOneWithoutExperienceInput;
