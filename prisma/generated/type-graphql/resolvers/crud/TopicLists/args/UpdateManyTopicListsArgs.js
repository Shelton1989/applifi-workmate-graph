"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsUpdateManyMutationInput_1 = require("../../../inputs/TopicListsUpdateManyMutationInput");
const TopicListsWhereInput_1 = require("../../../inputs/TopicListsWhereInput");
let UpdateManyTopicListsArgs = class UpdateManyTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsUpdateManyMutationInput_1.TopicListsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsUpdateManyMutationInput_1.TopicListsUpdateManyMutationInput)
], UpdateManyTopicListsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereInput_1.TopicListsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereInput_1.TopicListsWhereInput)
], UpdateManyTopicListsArgs.prototype, "where", void 0);
UpdateManyTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTopicListsArgs);
exports.UpdateManyTopicListsArgs = UpdateManyTopicListsArgs;
