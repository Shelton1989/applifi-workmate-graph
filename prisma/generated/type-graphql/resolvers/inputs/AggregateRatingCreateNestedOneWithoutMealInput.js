"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateNestedOneWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutMealInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutMealInput");
const AggregateRatingCreateWithoutMealInput_1 = require("../inputs/AggregateRatingCreateWithoutMealInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateNestedOneWithoutMealInput = class AggregateRatingCreateNestedOneWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput)
], AggregateRatingCreateNestedOneWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutMealInput_1.AggregateRatingCreateOrConnectWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutMealInput_1.AggregateRatingCreateOrConnectWithoutMealInput)
], AggregateRatingCreateNestedOneWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateNestedOneWithoutMealInput.prototype, "connect", void 0);
AggregateRatingCreateNestedOneWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateNestedOneWithoutMealInput", {
        isAbstract: true
    })
], AggregateRatingCreateNestedOneWithoutMealInput);
exports.AggregateRatingCreateNestedOneWithoutMealInput = AggregateRatingCreateNestedOneWithoutMealInput;
