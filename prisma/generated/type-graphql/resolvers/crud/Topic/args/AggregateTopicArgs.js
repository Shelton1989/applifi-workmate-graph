"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicOrderByWithRelationInput_1 = require("../../../inputs/TopicOrderByWithRelationInput");
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
let AggregateTopicArgs = class AggregateTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], AggregateTopicArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTopicArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], AggregateTopicArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTopicArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTopicArgs.prototype, "skip", void 0);
AggregateTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTopicArgs);
exports.AggregateTopicArgs = AggregateTopicArgs;
