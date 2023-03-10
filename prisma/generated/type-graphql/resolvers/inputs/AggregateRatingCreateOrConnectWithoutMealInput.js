"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutMealInput_1 = require("../inputs/AggregateRatingCreateWithoutMealInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateOrConnectWithoutMealInput = class AggregateRatingCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput)
], AggregateRatingCreateOrConnectWithoutMealInput.prototype, "create", void 0);
AggregateRatingCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], AggregateRatingCreateOrConnectWithoutMealInput);
exports.AggregateRatingCreateOrConnectWithoutMealInput = AggregateRatingCreateOrConnectWithoutMealInput;
