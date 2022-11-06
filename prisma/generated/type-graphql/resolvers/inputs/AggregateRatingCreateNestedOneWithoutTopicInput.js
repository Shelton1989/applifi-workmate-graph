"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateNestedOneWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutTopicInput");
const AggregateRatingCreateWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateWithoutTopicInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateNestedOneWithoutTopicInput = class AggregateRatingCreateNestedOneWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput)
], AggregateRatingCreateNestedOneWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutTopicInput_1.AggregateRatingCreateOrConnectWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutTopicInput_1.AggregateRatingCreateOrConnectWithoutTopicInput)
], AggregateRatingCreateNestedOneWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateNestedOneWithoutTopicInput.prototype, "connect", void 0);
AggregateRatingCreateNestedOneWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateNestedOneWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingCreateNestedOneWithoutTopicInput);
exports.AggregateRatingCreateNestedOneWithoutTopicInput = AggregateRatingCreateNestedOneWithoutTopicInput;
