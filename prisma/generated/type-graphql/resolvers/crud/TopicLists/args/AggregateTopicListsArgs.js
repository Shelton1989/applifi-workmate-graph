"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsOrderByWithRelationInput_1 = require("../../../inputs/TopicListsOrderByWithRelationInput");
const TopicListsWhereInput_1 = require("../../../inputs/TopicListsWhereInput");
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
let AggregateTopicListsArgs = class AggregateTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereInput_1.TopicListsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereInput_1.TopicListsWhereInput)
], AggregateTopicListsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsOrderByWithRelationInput_1.TopicListsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTopicListsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], AggregateTopicListsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTopicListsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTopicListsArgs.prototype, "skip", void 0);
AggregateTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTopicListsArgs);
exports.AggregateTopicListsArgs = AggregateTopicListsArgs;
