"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTopicResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateTopicArgs_1 = require("./args/UpdateTopicArgs");
const Topic_1 = require("../../../models/Topic");
const helpers_1 = require("../../../helpers");
let UpdateTopicResolver = class UpdateTopicResolver {
    async updateTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTopicArgs_1.UpdateTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateTopicResolver.prototype, "updateTopic", null);
UpdateTopicResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], UpdateTopicResolver);
exports.UpdateTopicResolver = UpdateTopicResolver;
