"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsWhereInput_1 = require("../../../inputs/TopicListsWhereInput");
let DeleteManyTopicListsArgs = class DeleteManyTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereInput_1.TopicListsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereInput_1.TopicListsWhereInput)
], DeleteManyTopicListsArgs.prototype, "where", void 0);
DeleteManyTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTopicListsArgs);
exports.DeleteManyTopicListsArgs = DeleteManyTopicListsArgs;
