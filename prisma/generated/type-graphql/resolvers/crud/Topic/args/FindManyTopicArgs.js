"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicOrderByWithRelationInput_1 = require("../../../inputs/TopicOrderByWithRelationInput");
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
const TopicScalarFieldEnum_1 = require("../../../../enums/TopicScalarFieldEnum");
let FindManyTopicArgs = class FindManyTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], FindManyTopicArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTopicArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], FindManyTopicArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTopicArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTopicArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicScalarFieldEnum_1.TopicScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTopicArgs.prototype, "distinct", void 0);
FindManyTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTopicArgs);
exports.FindManyTopicArgs = FindManyTopicArgs;
