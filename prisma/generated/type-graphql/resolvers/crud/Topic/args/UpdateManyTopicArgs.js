"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicUpdateManyMutationInput_1 = require("../../../inputs/TopicUpdateManyMutationInput");
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
let UpdateManyTopicArgs = class UpdateManyTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateManyMutationInput_1.TopicUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateManyMutationInput_1.TopicUpdateManyMutationInput)
], UpdateManyTopicArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], UpdateManyTopicArgs.prototype, "where", void 0);
UpdateManyTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTopicArgs);
exports.UpdateManyTopicArgs = UpdateManyTopicArgs;
