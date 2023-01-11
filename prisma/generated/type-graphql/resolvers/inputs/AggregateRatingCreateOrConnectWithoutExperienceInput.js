"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateWithoutExperienceInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateOrConnectWithoutExperienceInput = class AggregateRatingCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput)
], AggregateRatingCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
AggregateRatingCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], AggregateRatingCreateOrConnectWithoutExperienceInput);
exports.AggregateRatingCreateOrConnectWithoutExperienceInput = AggregateRatingCreateOrConnectWithoutExperienceInput;
