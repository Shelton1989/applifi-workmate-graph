"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateOrConnectWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateWithoutAggregateRatingInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateOrConnectWithoutAggregateRatingInput = class TopicCreateOrConnectWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateOrConnectWithoutAggregateRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput)
], TopicCreateOrConnectWithoutAggregateRatingInput.prototype, "create", void 0);
TopicCreateOrConnectWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateOrConnectWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicCreateOrConnectWithoutAggregateRatingInput);
exports.TopicCreateOrConnectWithoutAggregateRatingInput = TopicCreateOrConnectWithoutAggregateRatingInput;
