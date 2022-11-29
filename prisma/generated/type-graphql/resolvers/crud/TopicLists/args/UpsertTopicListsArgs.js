"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsCreateInput_1 = require("../../../inputs/TopicListsCreateInput");
const TopicListsUpdateInput_1 = require("../../../inputs/TopicListsUpdateInput");
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
let UpsertTopicListsArgs = class UpsertTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], UpsertTopicListsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCreateInput_1.TopicListsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsCreateInput_1.TopicListsCreateInput)
], UpsertTopicListsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsUpdateInput_1.TopicListsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsUpdateInput_1.TopicListsUpdateInput)
], UpsertTopicListsArgs.prototype, "update", void 0);
UpsertTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTopicListsArgs);
exports.UpsertTopicListsArgs = UpsertTopicListsArgs;
