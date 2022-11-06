"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateNestedOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateOrConnectWithoutAggregateRatingInput");
const TopicCreateWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateWithoutAggregateRatingInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateNestedOneWithoutAggregateRatingInput = class TopicCreateNestedOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput)
], TopicCreateNestedOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutAggregateRatingInput_1.TopicCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutAggregateRatingInput_1.TopicCreateOrConnectWithoutAggregateRatingInput)
], TopicCreateNestedOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateNestedOneWithoutAggregateRatingInput.prototype, "connect", void 0);
TopicCreateNestedOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateNestedOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicCreateNestedOneWithoutAggregateRatingInput);
exports.TopicCreateNestedOneWithoutAggregateRatingInput = TopicCreateNestedOneWithoutAggregateRatingInput;
