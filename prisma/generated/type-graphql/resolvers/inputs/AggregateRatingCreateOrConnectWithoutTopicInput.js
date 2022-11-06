"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateOrConnectWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateWithoutTopicInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateOrConnectWithoutTopicInput = class AggregateRatingCreateOrConnectWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateOrConnectWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput)
], AggregateRatingCreateOrConnectWithoutTopicInput.prototype, "create", void 0);
AggregateRatingCreateOrConnectWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateOrConnectWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingCreateOrConnectWithoutTopicInput);
exports.AggregateRatingCreateOrConnectWithoutTopicInput = AggregateRatingCreateOrConnectWithoutTopicInput;
