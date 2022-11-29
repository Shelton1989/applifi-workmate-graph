"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTopicListsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTopicListsArgs_1 = require("./args/FindFirstTopicListsArgs");
const TopicLists_1 = require("../../../models/TopicLists");
const helpers_1 = require("../../../helpers");
let FindFirstTopicListsResolver = class FindFirstTopicListsResolver {
    async findFirstTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTopicListsArgs_1.FindFirstTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTopicListsResolver.prototype, "findFirstTopicLists", null);
FindFirstTopicListsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], FindFirstTopicListsResolver);
exports.FindFirstTopicListsResolver = FindFirstTopicListsResolver;
